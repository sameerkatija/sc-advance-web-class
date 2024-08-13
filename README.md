## CSS GRID

CSS Grid Layout, commonly known as CSS Grid, is a powerful and versatile layout system in CSS that allows you to create complex and responsive web layouts with ease. It provides a `two-dimensional` grid-based approach for arranging content, which is a significant advancement over traditional layout techniques like floats.

[Flexbox](https://github.com/sameerkatija/sc-advance-web-class/tree/day-5?tab=readme-ov-file#css-flex-box) is also a very great layout tool, but its `one-directional` flow has different use cases — and they actually work together quite well! Grid is the very first CSS module created specifically to solve the layout problems we’ve all been hacking our way around for as long as we’ve been making websites.

### 1. Key Terminologies of CSS Grid

1. **Grid Container:** The element that has `display: grid;` or `display: inline-grid;` applied to it. It establishes a new grid formatting context for its children.

2. **Grid Items:** The direct children of the grid container. These elements are placed into the grid and can be positioned and sized according to the grid’s rules.

3. **Grid Lines:** The lines that form the boundaries of the grid cells. They can be used to position grid items precisely.

   ![Grid line](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-line.svg)

4. **Grid Tracks:** The space between grid lines, forming the rows and columns of the grid.

   ![Grid Track](https://css-tricks.com/wp-content/uploads/2021/08/terms-grid-track.svg)

5. **Grid Cells:** The individual boxes that make up the grid where grid items can be placed.
   ![Grid Cell](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-cell.svg)
6. **Grid Areas:** A rectangular area on the grid defined by four grid lines. Grid items can span multiple cells, forming a grid area.
   ![Grid Area](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-area.svg)

### 2. Key Properties

#### 2.1 Grid Template Columns and Rows:

- **`grid-template-columns`:** Defines the number and size of columns in the grid.

- **`grid-template-rows`:** Defines the number and size of rows in the grid.

- **`grid-template`:** A shorthand for setting `grid-template-rows`, `grid-template-columns`, and `grid-template-areas` in a single declaration.

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 200px 1fr 2fr; /* 3 columns with different sizes */
    grid-template-rows: 100px auto; /* 2 rows with specified sizes */
  }

  .container {
    grid-template: none | <grid-template-rows> / <grid-template-columns>;
  }
  ```

#### 2.2 Grid Gap:

- **`gap`:** Defines the spacing between grid items.

```css
.grid-container {
  gap: 20px;
  /* gap: 15px 10px; */
  /* column-gap: 10px; add gap between cols*/
  /* row-gap: 10px;  add gap between rows*/
}
```

#### 2.3 Grid Area:

- **`grid-template-areas`:** Defines a grid template by naming grid areas.

```css
.grid-container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

#### 2.4 Grid Column and Row Span:

- **`grid-column`:** Specifies how many columns an item should span.

- **`grid-row`:** Specifies how many rows an item should span.

```css
.item1 {
  grid-column: 1 / 3; /* Span from column line 1 to 3 */
  grid-row: 1 / 2; /* Span from row line 1 to 2 */
}
```

#### 2.5 Implicit Grid:

CSS Grid can automatically create rows and columns as needed when you place grid items outside the explicitly defined grid.

```css
.grid-container {
  grid-auto-rows: 100px; /* Automatically create rows with 100px height */
}
```
