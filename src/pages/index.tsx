import { Flex, Button, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Form/Input"

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justify="center"
    >
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360} 
        background="gray.800" 
        padding="8" // 2rem / 32px
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" {...register('email')}/>
          <Input name="password" type="password" label="Senha" {...register('password')}/>
        </Stack>

        <Button 
          type="submit" 
          marginTop="6" 
          colorScheme="pink" 
          size="lg"
          isLoading={formState.isSubmitting}
        > 
          Entrar
        </Button>
        
      </Flex>
    </Flex>
  )
}
