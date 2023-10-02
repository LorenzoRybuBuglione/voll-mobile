import { FormControl, Input } from "native-base";

interface EntradaTextoProps {
    label: string;
    placeholder: string;
    secret: boolean;
}

export function EntradaTexto({label, placeholder, secret = false}: EntradaTextoProps) {
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
      />
    </FormControl>
  );
}
