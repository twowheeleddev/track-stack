import { useState } from "react";
import axios from "axios";

const FileOrganizer = () => {
  const [directoryPath, setDirectoryPath] = useState("");
  const [organizedData, setOrganizedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleDirectorySubmit = async () => {
    if (!directoryPath) {
      alert("Please provide a directory path.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5000/organize-directory",
        { directoryPath }
      );
      setOrganizedData(response.data);
    } catch (error) {
      console.error("Error organizing directory:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderOrganizedData = () => {
    return Object.entries(organizedData).map(([artist, albums]) => (
      <div key={artist} className="mb-6">
        <h2 className="text-lg font-bold text-blue-500">{artist}</h2>
        {Object.entries(albums).map(([album, tracks]) => (
          <div key={album} className="ml-4 mb-4">
            <h3 className="text-md font-semibold text-green-500">{album}</h3>
            <ul className="list-disc ml-6">
              {tracks.map((track, index) => (
                <li key={index} className="text-sm">
                  {track.title} ({track.filePath})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={directoryPath}
          onChange={(e) => setDirectoryPath(e.target.value)}
          placeholder="Enter directory path"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-1/2"
        />
        <button
          onClick={handleDirectorySubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          {isLoading ? "Organizing..." : "Organize Directory"}
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Organized Library:</h2>
        {Object.keys(organizedData).length > 0 ? (
          <div className="bg-white p-4 rounded-lg shadow-md">
            {renderOrganizedData()}
          </div>
        ) : (
          <p className="text-gray-500">No directory organized yet.</p>
        )}
      </div>
    </div>
  );
};

export default FileOrganizer;
