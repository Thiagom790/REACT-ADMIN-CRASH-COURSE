import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

export function PostEdit(props) {
  return (
    <Edit title="Edit a Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput aria-label="published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
}
