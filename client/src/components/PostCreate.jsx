import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export function PostCreate(props) {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput aria-label="published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
}
