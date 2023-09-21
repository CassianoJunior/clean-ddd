import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'

interface AnswerProps {
  content: string
  authorId: UniqueEntityId
  questionId: UniqueEntityId
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }
}