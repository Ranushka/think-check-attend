export interface PredictionResponse {
  description: string
}

export interface LocationPageProps {
  params: { location: string }
}

export interface ReactChildren {
  children: React.ReactNode
}

export interface AllPosts {
  posts: {
    nodes: Post[]
  }
}
