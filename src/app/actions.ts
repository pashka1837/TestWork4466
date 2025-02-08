"use server";

export async function search(formData: FormData) {
  const search = formData.get("search");
  console.log(search);
}
