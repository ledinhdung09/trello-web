import Box from "@mui/material/Box";
import Card from "./Card/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCards({ cards }) {
  return (
    <SortableContext
      items={cards?.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
      {/* ListCard */}
      <Box
        sx={{
          p: "0 5px",
          m: "0 5px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: (theme) => `calc(
       ${theme.trello.boardContentHeight} - 
       ${theme.spacing(5)} -
       ${theme.trello.columnFooterHeight} -
       ${theme.trello.columnHeaderHeight})`,
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ced0da" /* Màu của thanh kéo */,
            borderRadius: " 8px" /* Độ bo tròn của thanh kéo */,
            border:
              "2px solid #f1f1f1" /* Để có khoảng trống giữa thanh kéo và track */,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bfc2cf" /* Màu khi hover */,
          },
        }}
      >
        {cards.map((card) => {
          return <Card key={card._id} card={card} />;
        })}
      </Box>
    </SortableContext>
  );
}

export default ListCards;
