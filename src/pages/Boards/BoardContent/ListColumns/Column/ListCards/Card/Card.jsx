import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";
import GroupIcon from "@mui/icons-material/Group";
import { Card as MuiCard } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import EditIcon from "@mui/icons-material/Edit";

function Card({ card }) {
  const shouldShowCardActions = () => {
    return (
      !!card?.memberIds?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    );
  };

  //keo tha
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card._id,
    data: { ...card },
  });

  const dndKitCardStyles = {
    // touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? "1px solid #2ecc71" : undefined,
  };
  return (
    <MuiCard
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: card?.FE_PlaceholderCard ? "hidden" : "unset",
        height: card?.FE_PlaceholderCard ? "0px" : "unset",
      }}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}

      <CardContent sx={{ p: 0, "&:last-child": { p: 0 } }}>
        <Button
          sx={{
            p: "4px 8px",
            border: "none",
            width: "100%",
            justifyContent: "space-between",
            color: "text.primary",
            "&:hover": {
              border: "none",
              ".endIcon": {
                opacity: 1, // Hiển thị icon khi hover
              },
            },
            "& .endIcon": {
              opacity: 0, // Ẩn icon ban đầu
              transition: "opacity 0.3s", // Hiệu ứng mượt khi hiện icon
            },
          }}
          disableRipple
          variant="outlined"
          endIcon={
            <IconButton aria-label="delete" sx={{ p: "5px" }}>
              <EditIcon className="endIcon" />
            </IconButton>
          }
        >
          {card?.title}
        </Button>
      </CardContent>
      {shouldShowCardActions() && (
        <CardActions sx={{ p: "0 4px 8px 4px" }}>
          {!!card?.memberIds?.length && (
            <Button size="small" startIcon={<GroupIcon />}>
              {card?.memberIds?.length}
            </Button>
          )}
          {!!card?.comments?.length && (
            <Button size="small" startIcon={<CommentIcon />}>
              {card?.comments?.length}
            </Button>
          )}
          {!!card?.attachments?.length && (
            <Button size="small" startIcon={<AttachmentIcon />}>
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  );
}

export default Card;
