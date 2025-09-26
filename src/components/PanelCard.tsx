import { config } from "@/lib/config";

type Panel = typeof config.panels;

interface PanelCardProps {
  panel: Panel;
}

export const PanelCard = ({ panel }: PanelCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left h-full">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{panel.title}</h3>
        <p className="text-gray-700 mb-4">{panel.topic}</p>
        <p className="text-sm font-semibold text-primary mb-2">
          Moderator: <span className="font-normal">{panel.moderator}</span>
        </p>
        {panel.leadPresenter && (
          <p className="text-sm font-semibold text-primary mb-2">
            Lead Presenter:{" "}
            <span className="font-normal">{panel.leadPresenter}</span>
          </p>
        )}
        <p className="text-sm font-semibold text-primary mb-2">Panelists:</p>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {panel.panelists.map((panelist, index) => (
            <li key={index}>{panelist}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
