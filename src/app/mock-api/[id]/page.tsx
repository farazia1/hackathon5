interface Home {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}

const HomeDetails = async ({ params }: { params: { id: string } }) => {
    const res = await fetch(`https://677f26c60476123f76a58163.mockapi.io/test/${params.id}`);
    const home: Home = await res.json();

    if (!home) {
        return <div>Home not found</div>;
    }

    return (
        <div className="p-6">
            <img 
                src={home.image} 
                alt={`Home ${home.name}`} 
                className="w-full h-auto rounded"
            />
            <h1 className="text-2xl font-bold mt-4">{home.name}</h1>
            <p className="mt-2 text-gray-600">Price: {home.price}</p>
            <p className="mt-4">{home.description}</p>
            <a href="/mock-api" className="text-blue-500 underline mt-4 inline-block">
                Back to Home List
            </a>
        </div>
    );
};

export default HomeDetails;
