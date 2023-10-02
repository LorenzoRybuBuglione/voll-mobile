import { Button, IButtonProps } from "native-base";

interface BotaoProps extends IButtonProps {
  label: string;
  bgColor?: string;
  autoSize?: boolean;
}

export function Botao({
  label,
  bgColor,
  autoSize = false,
  ...rest
}: BotaoProps) {
  return (
    <Button
      width={autoSize ? 'auto' : "100%"}
      backgroundColor={bgColor ? bgColor : "blue.800"}
      marginTop={10}
      borderRadius="lg"
      {...rest}
      // onPress={onPress}
    >
      {label}
    </Button>
  );
}
