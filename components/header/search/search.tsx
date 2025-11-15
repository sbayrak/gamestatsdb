import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search..." disabled />
      <InputGroupAddon>
        <SearchIcon data-testid="search-icon" />
      </InputGroupAddon>
    </InputGroup>
  );
}
