// このファイルはRecruit専門でルートを渡すファイル

import { Recruit } from "../Recruit";
import { RecruitDetail } from "../RecruitDetail";
import { UrlParameter } from "../UrlParameter";


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
  {
    path : "/:id",
    exact: false,
    children:<UrlParameter/>
  },
]
