import { FormControl, Input } from "native-base";

interface EntradaTextoProps {
  label?: string;
  placeholder: string;
  secret?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

export function EntradaTexto({
  label,
  placeholder,
  secret = false,
  value,
  onChangeText,
}: EntradaTextoProps) {
  return (
    <FormControl marginTop={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={placeholder}
        size="lg"
        width="100%"
        borderRadius="lg"
        backgroundColor="gray.100"
        shadow={3}
        secureTextEntry={secret}
        value={value}
        onChangeText={onChangeText}
      />
    </FormControl>
  );
}
