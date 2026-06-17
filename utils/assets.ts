const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function publicAssetPath(path: string){
  return `${PUBLIC_BASE_PATH}${path}`
}
