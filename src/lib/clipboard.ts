export async function copyToClipboard(value: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(value)
  } catch (error: any) {
    console.error(error.message)
  }
}
