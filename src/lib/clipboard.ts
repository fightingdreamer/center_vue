export async function copyToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value)
  } catch (error: any) {
    console.error(error.message)
  }
}
