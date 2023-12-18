"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import FormHeading from "./form-heading";
import { cn } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal, Check, Copy, ArrowBigUp, X } from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
  body: z
    .string()
    .min(1, "este campo não pode ficar vazio")
    .max(2048, "escreva no máximo 2048 caracteres"),
});

type FormType = z.infer<typeof formSchema>;

type Props = {};

export default function SendToClipboardForm({}: Props) {
  const [accessCode, setAccessCode] = useState<string | null>(null);

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      body: "",
    },
  });

  async function handleCopy() {
    if (accessCode) {
      await window.navigator.clipboard.writeText(accessCode);

      toast.success("Copiado!");
    }
  }

  async function onSubmit(values: FormType) {
    setAccessCode(null);
    try {
      const res = await axios.post(`/api/clipboards/`, values);

      toast.success("Enviado com sucesso!");

      setAccessCode(res.data.accessCode);
      form.reset();
    } catch (e: any) {
      toast.error(e?.response?.data?.message || "Ocorreu um erro");
    }
  }

  const { isSubmitting, isValid } = form.formState;

  return (
    <div className="space-y-6">
      <FormHeading
        title="Enviar para clipboard"
        icon={<ArrowBigUp className="w-8 h-8 text-indigo-400" />}
      />

      {accessCode != null && (
        <Alert className="bg-green-500/25 dark:border-slate-100/50">
          <div className="flex gap-x-4 justify-between items-center mb-4">
            <AlertTitle className="flex items-center gap-x-2 ">
              <Check className="h-6 w-6 " color="#00aa55" />
              Resultado:
            </AlertTitle>

            <Button
              variant="ghost"
              size="sm"
              className="border"
              onClick={() => {
                setAccessCode(null);
              }}
            >
              <X className="h-4 w-4 text-red-500" />
            </Button>
          </div>
          <AlertDescription className="space-y-4">
            <div className="flex gap-3 items-center justify-between">
              <p>
                Código de acesso: <strong>{accessCode}</strong>{" "}
              </p>

              <Button
                variant="ghost"
                size="sm"
                className="border"
                onClick={handleCopy}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <Image
              src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${
                window.origin + "?accessCode=" + accessCode
              }`}
              width={256}
              height={256}
              alt="accessCode qrCode"
              className="mx-auto"
            />
            <p className="text-xs text-center dark:text-slate-300">
              escaneie o qrCode para acessar a clipboard
            </p>
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Texto</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escreva aqui o que deseja compartilhar..."
                    className="h-48"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Válido por 15 minutos após ser enviado.{" "}
                  <span
                    className={cn(
                      "",
                      field.value.length > 2048 || field.value.length <= 0
                        ? "text-red-500"
                        : "text-green-500"
                    )}
                  >
                    ({field.value.length}/2048)
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-3">
            <Button disabled={isSubmitting || !isValid} type="submit">
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>

            <Button type="button" variant="outline" onClick={() => form.setValue("body", "")}>
              Limpar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
