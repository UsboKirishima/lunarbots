export const BotCard = ({
    id,
    name,
    servers,
    invite,
    category,
    description
}: 
{
    id: number;
    name: string;
    servers: string;
    invite: string;
    category: string;
    description: string;
}) => {
    return(
        <>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        <a className="card" href="#">
            <div className="card__background" style={{backgroundImage: 'url(https://st2.depositphotos.com/6046792/10319/i/450/depositphotos_103191654-stock-photo-background-of-the-dark-blue.jpg)'}}></div>
            <div className="card__content">
                <img id="pfp" src="https://images-ext-1.discordapp.net/external/Z6z_597b14if6AGMtaP8MCWTFUkG5jWUWkHjyjtlCPo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/848463685374443530/08a40e07427ecd04dc8fcf982ea82a4d.png?width=100&height=100" alt="pfp"/>
                <p className="card__category">{category}</p>
                <h3 className="card__heading">{name}</h3>
                <h4 className="card__description">{description}</h4>
            </div>
        </a>
        </>
    );
}