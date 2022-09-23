import Tappable, { TappableProps } from '../Tappable/Tappable'

const ImageCardButton = ({ icon, ...props }: TappableProps) => {
  return (
    <Tappable color="purple" size={80} variant="light" {...props}>
      {icon}
    </Tappable>
  )
}

export default ImageCardButton
