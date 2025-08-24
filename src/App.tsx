import { Button, TextField, useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { signOut } = useAuthenticator();

  const onSubmit = async () => {
    const response = await fetch(
      'https://3xch0dmovf.execute-api.ap-southeast-2.amazonaws.com/default/extract',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
    );

    console.log(await response.text());
  }

  return (
    <>
      <TextField label='Receipt'/>
      <Button onClick={onSubmit}>Submit</Button>
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
}

export default App;
