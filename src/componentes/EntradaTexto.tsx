import { FormControl, Input } from "native-base";

interface EntradaTextoProps {
    label: string;
    placeholder: string;
}

export function EntradaTexto({label, placeholder}: EntradaTextoProps) {
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
      />
    </FormControl>
  );
}
