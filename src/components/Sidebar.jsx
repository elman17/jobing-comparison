import { Box, Typography, TextField, Checkbox, FormControlLabel, Button, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const categories = [
  'Bütün Kateqoriyalar',
  'Hüquq və məhkəmə xidmətləri',
  'Marketinq, reklam, çap',
  'Digər Peşələr',
  'Kənd Təsərrüfatı',
  'İnzibati, Biznes',
  'Tikinti',
  'İT və Proqramlaşdırma',
  'Dizayn, media',
  'Nəqliyyat, paylama',
];

const cities = ['Bakı', 'Gəncə', 'Quba', 'Şuşa', 'Sumqayıt'];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: '260px',
        display: { xs: 'none', md: 'block' },
        flexShrink: 0,
        backgroundColor: '#fff',
        borderRadius: '12px',
        p: 2.5,
        height: 'fit-content',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      {/* Başlıq */}
      <Typography sx={{ fontSize: '17px', fontWeight: 700, mb: 2 }}>
        Bütün Filterlər
      </Typography>

      {/* Axtarış */}
      <TextField
        fullWidth
        placeholder="Axtar..."
        size="small"
        sx={{ mb: 2.5 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: '#c25b02' }} />
            </InputAdornment>
          ),
        }}
      />

      <Divider sx={{ mb: 2 }} />

      {/* Kateqoriyalar */}
      <Typography sx={{ fontSize: '14px', fontWeight: 700, mb: 1 }}>
        Kateqoriyalar
      </Typography>

      {categories.map((cat, i) => (
        <FormControlLabel
          key={cat}
          control={
            <Checkbox
              defaultChecked={i === 0}
              size="small"
              sx={{
                color: '#ddd',
                '&.Mui-checked': { color: '#c25b02' },
              }}
            />
          }
          label={
            <Typography sx={{ fontSize: '13px', color: '#444' }}>
              {cat}
            </Typography>
          }
          sx={{ display: 'flex', mb: 0.3 }}
        />
      ))}

      <Button
        sx={{
          color: '#c25b02',
          fontSize: '13px',
          fontWeight: 600,
          textTransform: 'none',
          p: 0,
          mt: 0.5,
          mb: 2,
        }}
      >
        Daha Çox ↓
      </Button>

      <Divider sx={{ mb: 2 }} />

      {/* Şəhər */}
      <Typography sx={{ fontSize: '14px', fontWeight: 700, mb: 1 }}>
        Şəhər
      </Typography>

      {cities.map((city) => (
        <FormControlLabel
          key={city}
          control={
            <Checkbox
              size="small"
              sx={{
                color: '#ddd',
                '&.Mui-checked': { color: '#c25b02' },
              }}
            />
          }
          label={
            <Typography sx={{ fontSize: '13px', color: '#444' }}>
              {city}
            </Typography>
          }
          sx={{ display: 'flex', mb: 0.3 }}
        />
      ))}
    </Box>
  );
}