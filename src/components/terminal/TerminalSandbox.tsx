import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { skills } from '../../data/profile';
import { profile } from '../../data/profile';

interface CommandEntry {
  command: string;
  output: React.ReactNode;
}

const TerminalSandbox = () => {
  const [history, setHistory] = useState<CommandEntry[]>([
    {
      command: '',
      output: (
        <div className="text-zinc-400 mb-2">
          Bharani-OS v1.0.0 (x86_64)
          <br />
          Type 'help' for a list of available commands.
        </div>
      )
    }
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    let output: React.ReactNode = null;

    switch (trimmedCmd.toLowerCase()) {
      case 'whoami':
        output = (
          <div className="text-zinc-300">
            <span className="text-neon-cyan">{profile.name.toLowerCase()}</span>
            <br />
            {profile.role.split(' & ').map(role => <div key={role}>{role}</div>)}
          </div>
        );
        break;
      case 'cat skills.py':
        output = (
          <div className="text-zinc-300">
            <span className="text-neon-violet">security</span> = [
            {skills.map((skill, i) => (
              <div key={skill} className="pl-4">
                <span className="text-neon-emerald">"{skill}"</span>{i < skills.length - 1 ? ',' : ''}
              </div>
            ))}
            ]
          </div>
        );
        break;
      case 'run red_team_sim':
        output = (
          <div className="text-zinc-400 font-mono">
            <div>[+] Initializing simulated engagement...</div>
            <div className="text-neon-cyan">[*] Enumerating attack surface: 100%</div>
            <div className="text-neon-cyan">[*] Analyzing identity misconfigurations...</div>
            <div className="text-neon-emerald">[+] No critical identity flaws detected. Target architecture is resilient.</div>
            <div>[!] Simulation complete. This portfolio is secure by design.</div>
          </div>
        );
        break;
      case 'ping portfolio':
        output = (
          <div className="text-zinc-300">
            PING portfolio (127.0.0.1) 56(84) bytes of data.
            <br />
            64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.034 ms
            <br />
            64 bytes from localhost (127.0.0.1): icmp_seq=2 ttl=64 time=0.041 ms
            <br />
            --- portfolio ping statistics ---
            <br />
            2 packets transmitted, 2 received, 0% packet loss
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setCommandHistory(prev => [...prev, trimmedCmd]);
        setInput('');
        setHistoryIndex(-1);
        return;
      case 'help':
        output = (
          <div className="grid grid-cols-2 gap-2 text-zinc-300 max-w-sm">
            <span className="text-neon-cyan">whoami</span><span>Display user info</span>
            <span className="text-neon-cyan">cat skills.py</span><span>List technical skills</span>
            <span className="text-neon-cyan">run red_team_sim</span><span>Run security simulation</span>
            <span className="text-neon-cyan">ping portfolio</span><span>Check connection</span>
            <span className="text-neon-cyan">clear</span><span>Clear terminal</span>
            <span className="text-neon-cyan">help</span><span>Show this menu</span>
          </div>
        );
        break;
      default:
        output = <div className="text-red-400">Command not found: {trimmedCmd}</div>;
    }

    setHistory(prev => [...prev, { command: trimmedCmd, output }]);
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl border border-white/10 bg-surface/90 backdrop-blur-xl overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/40">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mx-auto">
          <TerminalIcon size={14} /> guest@bharani-os:~
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        className="p-4 h-[300px] overflow-y-auto font-mono text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, i) => (
          <div key={i} className="mb-4">
            {entry.command && (
              <div className="flex items-center gap-2 text-zinc-300 mb-1">
                <span className="text-neon-emerald">guest@bharani</span>
                <span className="text-zinc-500">~</span>
                <span className="text-white">$</span>
                <span className="text-zinc-100">{entry.command}</span>
              </div>
            )}
            <div className="ml-4">{entry.output}</div>
          </div>
        ))}

        <div className="flex items-center gap-2 text-zinc-300">
          <span className="text-neon-emerald">guest@bharani</span>
          <span className="text-zinc-500">~</span>
          <span className="text-white">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-zinc-100 caret-neon-cyan"
            spellCheck="false"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default TerminalSandbox;
