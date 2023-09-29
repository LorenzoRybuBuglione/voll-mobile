import { Button } from "native-base";

interface BotaoProps {
  label: string;
}

export function Botao({ label }: BotaoProps) {
  return (
    <Button
      width="100%"
      backgroundColor="blue.800"
      marginTop={10}
      borderRadius="lg"
    >
      {label}
    </Button>
  );
}
