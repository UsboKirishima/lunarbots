export const Categories = ({
    name,
    value
  }: {
    name: string;
    value: string;
  }) => {
    return (
        <div className="button">
                <span>{name}</span>
                <svg>
                <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
            </svg>
        </div>
    );
}