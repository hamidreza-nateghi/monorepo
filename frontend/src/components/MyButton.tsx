/**
 * @author
 * Hamidreza Nateghi
 */

type Props = {
  hasLabel?: boolean
}

function MyButton({ hasLabel }: Props) {
  let label

  if (hasLabel) {
    label = 'Click me!'
  } else {
    label = 'Click him!'
  }

  return <button type='button'>{label}</button>
}

export default MyButton
