interface IArticle {
  id: number,
  title: string,
  author: string,
  createdAt: string,
  category: string,
  minsRead: string,
  desc: string,
  image: string,
}

type IDetailArticle = IArticle & {
  content: string,
}

interface IPropsDetailArticle {
  data: IDetailArticle,
}

export { IArticle, IDetailArticle, IPropsDetailArticle };
