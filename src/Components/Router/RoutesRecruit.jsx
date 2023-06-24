// このファイルはRecruit専門でルートを渡すファイル

import { Recruit } from "../Recruit";
import { RecruitDetail } from "../RecruitDetail";


export const RoutesRecruit = [
  {
    path : "/",
    exact: true,
    children:<Recruit />
  },
  {
    path : "/RecruitDetail",
    exact: false,
    children:<RecruitDetail />
  },
]
