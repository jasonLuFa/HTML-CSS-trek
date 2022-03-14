# Crazy Steak Project
## 目的
  * improve my first HTML & CSS project ( 單純一頁式畫面呈現，未做多頁畫面跳轉 )
  * 基於上一個專案，將所有用 float 的排版變 flexbox ，並修改一些畫面
  * 優化 navbar 的 RWD 
## 技術細節
  - *flexbox*
    - flex container
    - flex items

## 筆記
  - flex 排版方式 :
    * 先在 item container 設定 display: flex
    * 在設定 flex items，例如 `flex : 0 0 calc(25% - 1rem )` 的形式，代表不會因螢幕大小縮放空間，且 `calc()` 裡的 25% 代表 flex 裡的 items 分四區塊，1rem 是 flex items 間的間隔，在搭配 flex container 的 justify-content 去設定 flex items 間隔設定
