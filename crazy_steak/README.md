# Crazy Steak Project
## 目的
  * First HTML & CSS project ( 單純畫面呈現，未做畫面跳轉 )
  * [成品]( https://crazy-steak.netlify.app/ )

## 技術細節
  - *postion*
    - fixed 
    - relative
    - absolute
    - z-index
  - *display & float*
    - block
    - inline
    - inline-block
  - *Animation*
    - transition
    - transform
    - w/keyframes
  - *Unit*
    - rem, vh, vw, %, px,
  - *RWD*
    - media query
  - *other*
    - font、color、backgroun、image、 box model ......
    - 一些小圖片來自 [fontawesome]( https://fontawesome.com/ )
## 作法
 ### crazy steak html structure :<br>
   ![crazy steak html structure](./crazy_steak_html_structure.png)

## 筆記
  1. 定義出會被重複用到的 property value 到 `:root{}` 裡，以及思考哪些樣式會重複用到( 例如:`body{}`, `p{}`, `.section-title{}`...... )
  2. RWD 方面
     * 通常先從螢幕最小到大來設計( breakpoints : 576px, 768px, 992px, 1200px )
     * `.section-center` 目的就是為了設定可視範圍，並避免超過 1170px 的超大螢幕，導致畫面分散</br>

       ```css
       .section-center {
         padding: 4rem 0;
         width: 85vw;
         margin: 0 auto;
         max-width: 1170px;
       }
       ```
