import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import gt3rs from "../images/gt3rs.png";
import turbos from "../images/911turbos.png";
import Typography from "@mui/material/Typography";

function MuiCard() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Card sx={{ margin: 2, maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Porsche GT3-RS"
          height="150"
          image={gt3rs}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Porsche GT3-RS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sporcular bilir: üstün performans, mükemmel kondisyon ve şanstan
            daha fazlasını gerektirir. Daha güçlü ve daha hızlı olmak için
            durmak bilmeyen eğitim. Her şeyi, özellikle de kendini sorgulamak.
            Her hatadan ders çıkarmak. Çünkü en büyük zorluk rakipsiz kalmaktır.
            Bu duruşu ile Porsche, mümkün olanın sınırlarını zorlamaya devam
            ediyor. Artırılmış yarış pisti performansı ile yeni 911 GT3 RS'yi en
            üst seviyesinde deneyimleyin.
          </Typography>
        </CardContent>
        <Button size="small">SATIN AL</Button>
        <Button size="small">İLETİŞİME GEÇ</Button>
      </Card>
      <Card sx={{ margin: 2, maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Porsche 911TuboS"
          height="150"
          image={turbos}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Porsche 911 Turbo S
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mühendislerimiz şimdiye kadar üretilmiş en mükemmel spor otomobil
            hakkında konuşmayı severler. İnanılmaz bir performans sunar,
            konforludur ve günlük kullanıma tamamen uygundur. 911 Turbo
            modelleri, bu felsefeyi hayata geçirmeye devam ediyor.
          </Typography>
        </CardContent>
        <div style={{marginTop:"80px"}}>
        <Button size="small">SATIN AL</Button>
        <Button size="small">İLETİŞİME GEÇ</Button>
        </div>

      </Card>
    </div>
  );
}

export default MuiCard;
