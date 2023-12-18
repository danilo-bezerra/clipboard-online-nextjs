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
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import FormHeading from "./form-heading";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import ClipboardText from "../clipboard-text";
import { ArrowBigDown } from "lucide-react";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  code: z
    .string()
    .min(6, "este campo não pode ficar vazio")
    .max(6, "escreva no máximo 6 caracteres"),
});

type FormType = z.infer<typeof formSchema>;

type Props = {};

export default function RecoverFromClipboardForm({}: Props) {
  const [recoveredText, setRecoveredText] = useState<string | null>("");

  const searchParams = useSearchParams();

  const accessCode = searchParams.get("accessCode");

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  async function searchClipboard(accessCode: string) {
    setRecoveredText(null);
    try {
      const res = await axios.get(`/api/clipboards/${accessCode}`);

      setRecoveredText(res.data.body);
    } catch (e: any) {
      toast.error(e?.response?.data?.message);
    }
  }

  function handleClear() {
    setRecoveredText("");
    form.setValue("code", "");
  }

  async function onSubmit(values: FormType) {
    if (typeof values.code == "string") {
      searchClipboard(values.code);
    }
  }

  const { isSubmitting, isValid } = form.formState;

  useEffect(() => {
    if (typeof accessCode == "string") {
      searchClipboard(accessCode);
      form.setValue("code", accessCode);
    }
  }, []);

  return (
    <div className="space-y-6">
      <FormHeading
        title="Buscar da clipboard"
        icon={<ArrowBigDown className="w-8 h-8 text-indigo-400" />}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    maxLength={6}
                    placeholder="ex: 123456"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  O código deve ter 6 dígitos
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-3 items-center">
            <Button disabled={isSubmitting || !isValid} type="submit">
              {isSubmitting ? "Buscando..." : "Buscar"}
            </Button>

            <Button  type="button" variant="outline" onClick={handleClear}>
              Limpar
            </Button>
          </div>
        </form>
      </Form>

      <div>
        <p>{recoveredText}</p>
      </div>

      {recoveredText != null && <ClipboardText text={recoveredText} onClose={handleClear}/>}
    </div>
  );
}
