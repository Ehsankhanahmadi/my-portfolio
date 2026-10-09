import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const commands = [
  {
    text: "python -m venv .venv",
    output: ["Virtual environment created."],
  },
  {
    text: ".\\.venv\\Scripts\\Activate.ps1",
    output: ["Environment activated."],
  },
];



export default function TerminalAnimation() {
  const { theme } = useTheme();
  const [commandIndex, setCommandIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const currentCommand = commands[commandIndex];

    if (typedText.length < currentCommand.text.length) {
      const timeout = setTimeout(() => {
        setTypedText(
          currentCommand.text.slice(0, typedText.length + 1),
        );
      }, 45);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setShowOutput(true);
    }, 450);

    return () => clearTimeout(timeout);
  }, [typedText, commandIndex]);

  useEffect(() => {
    if (!showOutput) return;

    const timeout = setTimeout(() => {
      if (commandIndex < commands.length - 1) {
        setCommandIndex((index) => index + 1);
        setTypedText("");
        setShowOutput(false);
      } else {
        setTimeout(() => {
          setCommandIndex(0);
          setTypedText("");
          setShowOutput(false);
          setCycle((value) => value + 1);
        }, 2200);
      }
    }, 1200);

    return () => clearTimeout(timeout);
  }, [showOutput, commandIndex]);

  
return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute m-5 top-[8%] z-0 hidden h-[65%] w-[90%] overflow-visible lg:block"
    >
      {/* Green ambient glow */}      
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px] sm:blur-[100px] ${
          theme === "dark"
            ? "terminal-glow-green"
            : "terminal-glow-blue"
        }`}
      />

      {/* Terminal window */}
      <div className="terminal-window relative h-full overflow-hidden rounded-lg border font-mono text-[10px] shadow-2xl backdrop-blur-[2px] sm:text-sm">
        <div className="terminal-header flex items-center gap-2 border-b px-3 py-2 sm:px-4 sm:py-3">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />

          <span className="terminal-muted ml-2">
            Windows PowerShell
          </span>
        </div>

        <div className="space-y-3 p-3 sm:p-8">
          {commands.slice(0, commandIndex).map((command, index) => (
            <div key={`${cycle}-${index}`} className="space-y-1">
              <p className="break-words">
                <span className="terminal-prompt">PS</span>{" "}
                <span className="terminal-path">
                  C:\Projects\platform&gt;
                </span>{" "}
                {command.text}
              </p>

              {command.output.map((line) => (
                <p key={line} className="terminal-output pl-2">
                  {line}
                </p>
              ))}
            </div>
          ))}

          <div className="space-y-1">
            <p className="break-words">
              <span className="terminal-prompt">PS</span>{" "}
              <span className="terminal-path">
                C:\Projects\platform&gt;
              </span>{" "}
              {typedText}
              <span className="terminal-cursor ml-0.5 inline-block h-3 w-1 animate-pulse align-middle sm:h-4" />
            </p>

            {showOutput &&
              commands[commandIndex].output.map((line) => (
                <p key={line} className="terminal-output pl-2">
                  {line}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}