import { FeedItem } from "./FeedItem";
import { WriteNewPostCard } from "./WriteNewPostCard";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./primitives/DropdownMenu";
import { Separator } from "./primitives/Separator";

const SortByDivider = () => {
  return (
    <div className="flex flex-row mt-2">
      <div className="pt-2 w-full">
        <Separator className="bg-zinc-300" />
      </div>
      <span className="text-zinc-500 text-xs w-24 pl-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer">
              Sort by: <span className="font-semibold text-zinc-800">Top</span>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24">
            <DropdownMenuItem>
              <span>Top</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Recent</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </span>
    </div>
  );
};

export const Main = () => {
  return (
    <div style={{ gridArea: "main" }}>
      <WriteNewPostCard />
      <SortByDivider />
      <FeedItem
        type="post"
        content="Today, we are bringing together AI and quantum with Azure Quantum Elements, ushering in a new era of scientific discovery. Our goal is to compress the next 250 years of chemistry and materials science progress into the next 25."
        link={{
          title:
            "Accelerating scientific discovery with Azure Quantum - The Official Microsoft Blog",
          thumbnail:
            "https://blogs.microsoft.com/wp-content/uploads/prod/2023/06/230615_OMB-Hero_1920x1080-1.png",
          href: "https://blogs.microsoft.com/blog/2023/06/21/accelerating-scientific-discovery-with-azure-quantum/",
        }}
        author={{
          name: "Jason Zander",
          subtext: "Chairman and CEO at Microsoft",
          imageUrl:
            "https://media.licdn.com/dms/image/C4E03AQGMOAnNSw0McA/profile-displayphoto-shrink_100_100/0/1601454356562?e=1700092800&v=beta&t=iqLmfbPq_qw9S0ItGssixFzFQBogjJkJzAkLW6yLMek",
          connectionDegree: "1st",
        }}
        stats={{
          likes: 5788,
          comments: 139,
          reposts: 593,
        }}
      />
      <FeedItem
        type="post"
        content="In my annual letter to shareholders, I reflect on our opportunity and responsibility to connect what technology can do with what the world needs it to do."
        link={{
          title:
            "My annual letter: A historic intersection of opportunity and responsibility",
          thumbnail:
            "https://media.licdn.com/dms/image/D5612AQFgZ0SQWJiFmA/article-cover_image-shrink_423_752/0/1666889019946?e=1700092800&v=beta&t=ou9Zc7rmwDXjcUoDAWdv0bLdeXh41VPvEDiBa8eAKYM",
          href: "https://www.linkedin.com/pulse/my-annual-letter-historic-intersection-opportunity-satya-nadella?trackingId=dxsWwqZOReOJKem4oxhXlg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_content%3BpL6f%2BL5xQK%2BhHU6uCrNBdg%3D%3D",
        }}
        author={{
          name: "Satya Nadella",
          subtext: "Chairman and CEO at Microsoft",
          imageUrl:
            "https://media.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_100_100/0/1579726624860?e=1700092800&v=beta&t=54R594PNGBYipT1NH6WzIoE1URqm428BIutDHj3saV8",
          connectionDegree: "1st",
        }}
        stats={{
          likes: 5361,
          comments: 73,
          reposts: 275,
        }}
      />
      <FeedItem
        type="post"
        content="Incredible day in New York for Salesforce AI Day. Huge thanks to all our customer TrAIlblazers, partners, media, and analysts who joined us. "
        thumbnail="https://media.licdn.com/dms/image/D5622AQEP1iaxSiHGTw/feedshare-shrink_800/0/1684437337788?e=1697673600&v=beta&t=M95dTQOc-pNgEjsWI3Y83e0bgJzxXhOnbEQ8KclEZJE"
        author={{
          name: "Clara Shih",
          subtext: "CEO of Salesforce AI, Board Director & Entrepreneur",
          imageUrl:
            "https://media.licdn.com/dms/image/D5603AQE4FKqeU43XUA/profile-displayphoto-shrink_100_100/0/1694219022515?e=1700092800&v=beta&t=MCWt3dGilkH5FB92Z0ARG-TNb0QJRgl74PodaTugBYs",
          connectionDegree: "3rd",
        }}
        stats={{
          likes: 837,
          comments: 39,
          reposts: 27,
        }}
      />
      <FeedItem
        type="post"
        content="Proud to announce the launch of our new sustainable data center region in Sweden, using 100% renewable energy and zero-waste operations."
        link={{
          title:
            "Google unveils its first sustainable data center region in Sweden",
          thumbnail:
            "https://media.licdn.com/dms/image/D4E22AQGks7nh7Psgsg/feedshare-shrink_800/0/1694025961041?e=1697673600&v=beta&t=zb26-TKCir_7nsIDwjxRz8vpFnhVB8PP4S92lmyvKBo",
          href: "https://www.linkedin.com/posts/nancyduarte_dreamforce-datastorytelling-activity-7105259868965482496-CvDc?utm_source=share&utm_medium=member_desktop",
        }}
        author={{
          name: "Sundar Pichai",
          subtext: "CEO at Google",
          imageUrl:
            "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
          connectionDegree: "2nd",
        }}
        stats={{
          likes: 4891,
          comments: 131,
          reposts: 503,
        }}
      />
      <FeedItem
        type="post"
        content="Really proud of the team for our continued advancements in VR technology. The future of communication is exciting!"
        link={{
          title: "Facebook's new VR tech is pushing the boundaries",
          thumbnail:
            "https://media.licdn.com/dms/image/D4D12AQEUUUMmL2tvQg/article-cover_image-shrink_600_2000/0/1690788191321?e=1700092800&v=beta&t=KaIFewle3tnv3ROyAjnfBldUwLkOQnotSLEo93acsrM",
          href: "https://www.facebook.com/tech/news/tab/new-vr-tech",
        }}
        author={{
          name: "Mark Zuckerberg",
          subtext: "CEO at Facebook",
          imageUrl:
            "https://media.licdn.com/dms/image/D4D03AQFOxLaCY8V6IA/profile-displayphoto-shrink_100_100/0/1667649298113?e=1700092800&v=beta&t=dbTRue1cMCqLOs5DPy7pL4FL5NiZtHvFzjS-1GaEKOw",
          connectionDegree: "3rd",
        }}
        stats={{
          likes: 3254,
          comments: 97,
          reposts: 213,
        }}
      />
      <FeedItem
        type="post"
        content="Exciting to see SpaceX push the boundaries of space technology once more. The successful launch of Falcon Heavy was a sight to behold."
        thumbnail="https://media.licdn.com/dms/image/D4D12AQEj2xWVCGQsFQ/article-cover_image-shrink_600_2000/0/1694412235632?e=1700092800&v=beta&t=EwD4mWSy4iBRQoKyFQUoBOVQFDa6A-R6nClne4z24vE"
        author={{
          name: "Elon Musk",
          subtext: "CEO of SpaceX and Tesla, Entrepreneur",
          imageUrl: "https://media.licdn.com/dms/image/C4E07AQGX-zDA2RS4bQ/group-logo_image-shrink_48x48/0/1631001921762?e=1695218400&v=beta&t=hlb7dvMGLw6d79S1NC8vJmWSW-cIquFQFkdIMQeX0d0",
          connectionDegree: "2nd",
        }}
        stats={{
          likes: 18537,
          comments: 839,
          reposts: 1247,
        }}
      />
    </div>
  );
};
