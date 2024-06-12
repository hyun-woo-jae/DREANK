import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

const posts = [
  {
    title: "노래방",
    content: "노래하는 즐거움 TJ",
    date: "08/24",
    likes: 2,
  },
  {
    title: "Hihi",
    content: "오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호오호",
    date: "05/10",
    likes: 2,
  },
];

// Function to truncate text to 50 characters
function truncateText(text, length = 50) {
    return text.length > length ? text.substring(0, length) + "..." : text;
  }

export default function Posts() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#FFFFFF",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 4, color: "#334EAC", fontWeight: "bold", fontSize: 30 }}
      >
        게시물 관리
      </Typography>

      {posts.map((post, index) => (
        <Card
          key={index}
          sx={{
            mb: 2,
            p: 2,
            boxShadow: 1,
            border: "1px solid #e0e0e0",
            width: "600px",
            textAlign: 'left' // Ensure text aligns left
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: 18, textAlign: 'left' }}>
            {post.title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, mb: 1, color: "#666", textAlign: 'left' }}>
            {truncateText(post.content)}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontSize: 14, color: "#334EAC" }}>
              {post.date} | 좋아요 {post.likes}
            </Typography>
            <Button variant="outlined" sx={{ color: "primary.main" }}>
              자세히 보기
            </Button>
          </Stack>
        </Card>
      ))}
    </Box>
  );
}
