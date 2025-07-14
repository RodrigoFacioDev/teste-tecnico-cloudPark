import Button from "@/common/Button/Button";
import Input from "@/common/Input/Input";
import Select from "@/common/Select/Select";
import api from "@/hooks/api";
import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
import { z } from "zod";
import { CallStatus } from "../../types";
import {
  ButtonRow,
  ErrorText,
  ErrorTextDescription,
  ModalContainer,
  ModalTitle,
  Overlay,
} from "./style";

// Schema de validação
const callSchema = z.object({
  title: z.string().min(5, "Título deve ter pelo menos 5 letras"),
  description: z
    .string()
    .refine(
      (desc) => desc.trim().split(/\s+/).length >= 5,
      "Descrição deve ter pelo menos 5 palavras"
    ),
  status: z.enum(["Aberto", "Em andamento", "Resolvido"]),
  category: z.string().min(1, "Categoria é obrigatória"),
});

type CallFormData = z.infer<typeof callSchema>;

interface Category {
  id: string;
  name: string;
}

interface CallModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    description: string;
    status: CallStatus;
    category: string;
  }) => void;
}

const statusOptions: CallStatus[] = ["Aberto", "Em andamento", "Resolvido"];

export default function CallModal({
  visible,
  onClose,
  onSubmit,
}: CallModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<CallStatus>("Aberto");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
    category?: string;
  }>({});

  useEffect(() => {
    const getCategories = async () => {
      const res = await api.get("/categories");
      setCategories(res.data);
    };
    getCategories();
  }, []);
  const validateForm = (): boolean => {
    const formData: CallFormData = { title, description, status, category };
    const result = callSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: {
        title?: string;
        description?: string;
        category?: string;
      } = {};
      result.error.issues.forEach((error: any) => {
        if (error.path.includes("title")) {
          newErrors.title = error.message;
        }
        if (error.path.includes("description")) {
          newErrors.description = error.message;
        }
        if (error.path.includes("category")) {
          newErrors.category = error.message;
        }
      });
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    onSubmit({ title, description, status, category });
    setTitle("");
    setDescription("");
    setStatus("Aberto");
    setCategory("");
    setErrors({});
    onClose();
  };

  const handleTitleChange = (text: string) => {
    setTitle(text);
    if (errors.title) {
      setErrors((prev) => ({ ...prev, title: undefined }));
    }
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
    if (errors.description) {
      setErrors((prev) => ({ ...prev, description: undefined }));
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <Overlay>
        <ModalContainer>
          <ModalTitle>Novo Chamado</ModalTitle>
          <Input
            placeholder="Título do chamado"
            value={title}
            onChangeText={handleTitleChange}
            autoFocus
          />
          {errors.title && <ErrorText>{errors.title}</ErrorText>}
          <Input
            placeholder="Descrição"
            value={description}
            onChangeText={handleDescriptionChange}
            multiline
            numberOfLines={4}
            style={{
              minHeight: 80,
              textAlignVertical: "top",
              marginBottom: 16,
            }}
          />
          {errors.description && (
            <ErrorTextDescription>{errors.description}</ErrorTextDescription>
          )}
          <Select
            value={category}
            onValueChange={(itemValue) => setCategory(itemValue as string)}
            options={categories.map((cat) => ({
              label: cat.name,
              value: cat.name,
            }))}
            placeholder="Selecione uma categoria"
            label="Categoria"
            containerStyle={{ marginBottom: 16 }}
          />
          {errors.category && <ErrorText>{errors.category}</ErrorText>}

          <ButtonRow>
            <Button onPress={handleSave} style={{ flex: 1, marginRight: 6 }}>
              Salvar
            </Button>
            <Button
              onPress={onClose}
              color="#d32f2f"
              style={{ flex: 1, marginLeft: 6 }}
            >
              Cancelar
            </Button>
          </ButtonRow>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
}
