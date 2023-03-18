interface BlogProps {
  params: {
    id: string
  }
}

export default function Blog ({ params }: BlogProps) {
  const { id } = params;
  return (
    <h2>
      Este el es post {id}
    </h2>
  )
}
