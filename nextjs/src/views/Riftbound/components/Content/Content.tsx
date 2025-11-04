import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FaqGroupItemProps {
  title: string;
  items: Array<{
    title: string;
    subtitle: string;
  }>;
}

const FaqGroupItem = ({ title, items }: FaqGroupItemProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                {item.subtitle}
              </Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Content = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Mastering Point Tempo in Riftbound'}
          items={[
            {
              title: 'Overview',
              subtitle:
                'In Riftbound, victory isn\'t about flashy combos - it\'s about tempo.\n\nEvery match is a race to reach 8 points first, and the player who controls when and where those points are scored dictates the entire flow of the game.\n\nPoint Tempo means planning how you\'ll reach 8 before your opponent - not just playing reactively. The best players map out their scoring path early, manage battlefields smartly, and convert every moment of control into points.',
            },
            {
              title: 'Point 1: Early Game - Secure and Reinforce',
              subtitle:
                'The first few turns set your entire tempo plan. You have two main paths:\n\na. Establish and Hold:\n\nQuickly deploy to a battlefield you can reinforce all game. Get points early, fortify your lead, and make that lane your stronghold.\n\nPrioritize stable units over flashy plays.\n\nReinforce instead of rotating too early - every hold turn matters.\n\nThe longer you maintain that lane, the easier it is to pivot later.\n\nb. Hit and Retreat:\n\nSometimes, the smarter play is to grab early points, then fall back.\n\nPush fast, get ahead 2-3 points, then regroup.\n\nUse your tempo advantage to force overreactions and set up counter-attacks.\n\nMake your opponent chase your lead across battlefields.',
            },
            {
              title: 'Point 2: Mid to Late Game - Converting Control into Points',
              subtitle:
                'When both players are developing, tempo becomes about timing your pushes.\n\na. Overload to Hold:\n\nIn the late game, pick your decisive battlefield and commit.\n\nStack units and buffs to ensure control for multiple turns.\n\nMake your opponent waste mana contesting your hold.\n\nEvery turn you hold uncontested is free progress toward 8.\n\nb. The Double-Conquer Turn:\n\nElite players win with planned explosiveness.\n\nBuild pressure across two lanes, then strike for point 7 and 8 together.\n\nThis "double-conquer" turn prevents comeback plays and closes games instantly.\n\nDon\'t rush into it - prepare your board so your final push is unstoppable.',
            },
            {
              title: 'Point 3: Planning Your 8-Point Route',
              subtitle:
                'Winning through tempo isn\'t luck - it\'s mapping your path from turn one.\n\nAsk yourself:\n\nWhich battlefield can I control the longest?\n\nWhere will my 7th and 8th points come from?\n\nWhen should I shift from scoring to defending?\n\nEvery tempo-based win comes from foresight. You\'re not reacting to their moves - you\'re executing your plan turn by turn until the scoreboard reads 8-X.',
            },
            {
              title: 'Conclusion',
              subtitle:
                'Tempo is more than speed - it\'s direction.\n\nBy knowing when to push, when to hold, and when to convert, you dictate every turn\'s pace.\n\nRiftbound rewards players who plan their path to 8 before the first card hits the field.\n\nScore first, stay in control, and end the game on your own terms.',
            },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'How to Win More in Riftbound: Timing Actions and Reactions'}
          items={[
            {
              title: 'Overview',
              subtitle:
                'In Riftbound, when you play matters just as much as what you play.\n\nEvery turn is a dance of actions and reactions - deciding whether to strike first, hold back, or respond at the perfect moment. Understanding timing is how you turn average cards into high-impact plays.\n\nAt its core, this lesson is about priority, information, and control.\n\nKnowing when to act - and when to wait - lets you gain more value from each rune, bluff effectively, and read your opponent\'s plans before they unfold.',
            },
            {
              title: 'Point 1: Understanding Priority and Information',
              subtitle:
                'When it\'s your turn, you have priority - the right to act first. But once you act, your opponent gets a chance to respond. Great players use this rhythm to gather information before committing resources.\n\nWait to see what your opponent reveals. If they leave runes open, assume they\'re holding reactive cards.\n\nForce information. Sometimes a small, safe action early in a turn can bait responses and tell you what they\'re holding.\n\nReact last, win more. Holding your spells until your opponent commits means you\'ll know exactly what needs answering.\n\nTiming isn\'t just patience - it\'s control through observation.',
            },
            {
              title: 'Point 2: Extracting Maximum Value',
              subtitle:
                'Every rune you spend should create as much advantage as possible. Acting too early wastes potential; acting too late loses momentum.\n\nRespond efficiently. Use cheap, flexible cards to punish your opponent\'s big plays without losing tempo.\n\nStack your effects. Chain abilities together at the right time to multiply their impact - reacting after a trigger can often flip the entire exchange.\n\nLet the situation develop. If your opponent overextends, you gain more targets and more value from the same card.\n\nThink of your timing as leverage - the more patient you are, the greater the return.',
            },
            {
              title: 'Point 3: Bluffing and Reading Reactions',
              subtitle:
                'Experienced players play the person, not just the board. The runes left unspent are often louder than any card played.\n\nBluff with intent. Leaving two runes open can make your opponent hesitate to attack or commit - even if you have nothing.\n\nRead their confidence. Quick plays signal comfort; long pauses often mean indecision or setup.\n\nPunish open runes. If your opponent keeps mana untapped but never uses it, push tempo and make them pay for their hesitation.\n\nHide your true plan. Sometimes pretending to have an answer is enough to buy you a full turn of safety.\n\nTiming gives you access to the psychological battlefield.',
            },
            {
              title: 'Conclusion',
              subtitle:
                'Great Riftbound players don\'t just react - they dictate reactions.\n\nBy mastering timing, you turn every action into a choice that pressures your opponent to move on your terms.\n\nLearn to wait, read, and strike when it matters most.\n\nThat\'s how you gain value, gather information, and win - not just on the board, but in the mind game behind it.',
            },
          ]}
        />
      </Box>
      <Box>
        <FaqGroupItem
          title={'Want more?'}
          items={[
            {
              title: 'Keep checking back here or send me a quick message!',
              subtitle:
                'Your feedback and support means the world to me!\n\nIf there are specific strategies you\'re struggling with or topics you\'d like to dive deeper into, let me know! Your questions and ideas shape future guides, ensuring I am covering what matters most to help you improve. Each game has its unique challenges, and your input helps me to create resources that directly address the situations you face. So, don\'t hesitate to reach out with your ideas and questions!',
            },
            {
              title: 'Get Expert Coaching! [Shameless Plug]',
              subtitle:
                'Ready to take your skills even higher? Sign up for a coaching session or deck review, where I work one-on-one to refine your strategy, strengthen your deck building, and refine your in-game tactics. This is a personalized approach focusing on building the tools you need to outplay the competition consistently. Whether you\'re just starting or looking to compete at a higher level, I\'m here to help you win more, lose less, and enjoy the game at its best. Let\'s start winning together-Click Start Now in the navigation bar!',
            }
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;

