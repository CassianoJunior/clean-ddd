import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'
import { Slug } from './value-objects/slug'

interface QuestionProps {
  title: string
  content: string
  slug: Slug
  authorId: UniqueEntityId
}

export class Question extends Entity<QuestionProps> {}
