# Grid layout practice
## 目的
  * 練習使用 grid 做 RWD 的排版
  * 複習 flex 做 navbar 
  * [成品]( https://grid-basic-practice.netlify.app/ )
## 技術細節
  - *grid*
    - grid-template-column / grid-template-row ( grid-container )
    - justify-content / align-items ( grid-container )
    - gap / column-gap / column-row ( grid-container )
    - grid-template-area ( grid-container )
    - grid-column / grid-row / grid-area ( grid-items )
  - *flex*

## 筆記
  - 如果是固定寬度的 grid-item ，可藉由 `grid-template-column : repeat(auto-fill,minmax(calc(<grid-item 寬度>),1fr))` 來代替 media query 做排版
  - 每個 grid-item 寬度不同的排版可藉由以下兩種方式 :
    - grid-template-columns / grid-template-rows + grid-template-areas ( grid-container ) + grid-area ( grid-items )
    - grid-template-columns / grid-template-rows ( grid-container ) + grid-area ( grid-items )
