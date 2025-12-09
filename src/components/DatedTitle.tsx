interface DatedTitleProps {
    title: string;
    date?: string;
}

const DatedTitle = ({ title, date }: DatedTitleProps) => {
    return (
        <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold">{title}</h2>
            {date && <small className="text-muted-foreground">{date}</small>}
        </div>
    );
};

export default DatedTitle;
