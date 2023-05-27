import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../ui/card";
  import { Separator } from "../ui/separator";

export interface OrderProps {
    id: number;
    address: string;
    date: string;
    value: number;
}
function OrderCard({ id,address,date,value  }: OrderProps) {
    const dateObject = new Date(date);
    const formattedDate = new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(dateObject);
    const formattedValue = `$${value.toLocaleString("es-ES")}`;
  
    return (
      <Card key={id} className="Card">
        <CardHeader className="card-header">
          <CardTitle className="card-title">Pedido # {id}</CardTitle>
          <CardDescription className="card-description">
            {address} / {formattedDate}
          </CardDescription>
          <Separator className="card-separator"/>
        </CardHeader>
        <CardContent className="card-content">
          <p>{formattedValue}</p>
        </CardContent>
      </Card>
    );
  }
export default OrderCard;