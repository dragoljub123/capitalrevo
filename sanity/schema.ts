import { type SchemaTypeDefinition } from 'sanity'
import { post } from './Schemas/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}
