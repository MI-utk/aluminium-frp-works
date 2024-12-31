interface ProductHeaderProps {
  title: string;
  description: string;
  image: string;
  isRoofingProduct?: boolean;
}

export const ProductHeader = ({ title, description, image, isRoofingProduct }: ProductHeaderProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-gray-700 mb-6">{description}</p>
        {isRoofingProduct && (
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => window.open('https://www.alushade.in', '_blank')}
          >
            Visit Alushade Website
            <ExternalLink className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};