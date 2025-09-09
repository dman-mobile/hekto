export default function Input({ placeholder }: { placeholder: string }) {
  return (
    <input placeholder={placeholder} type="text" maxLength={99} />
  )
}