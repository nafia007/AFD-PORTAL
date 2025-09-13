import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Briefcase, DollarSign, Star, Search, Filter } from "lucide-react";

interface CommunityFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeTags: string[];
  onTagToggle: (tag: string) => void;
  popularTags: string[];
}

const FILTER_OPTIONS = [
  { value: 'all', label: 'All Posts', icon: FileText, count: null },
  { value: 'general', label: 'Discussion', icon: FileText, count: null },
  { value: 'news', label: 'News', icon: FileText, count: null },
  { value: 'funding', label: 'Funding', icon: DollarSign, count: null },
  { value: 'jobs', label: 'Jobs', icon: Briefcase, count: null },
  { value: 'showcase', label: 'Showcase', icon: Star, count: null },
];

export default function CommunityFilters({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  activeTags,
  onTagToggle,
  popularTags,
}: CommunityFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter buttons */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Filter className="w-4 h-4" />
          Categories
        </div>
        <div className="grid grid-cols-2 gap-2">
          {FILTER_OPTIONS.map(option => {
            const isActive = activeFilter === option.value;
            return (
              <Button
                key={option.value}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => onFilterChange(option.value)}
                className="justify-start gap-2"
              >
                <option.icon className="w-4 h-4" />
                {option.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Popular tags */}
      {popularTags.length > 0 && (
        <div className="space-y-3">
          <div className="text-sm font-medium">Popular Tags</div>
          <div className="flex flex-wrap gap-1">
            {popularTags.map(tag => {
              const isActive = activeTags.includes(tag);
              return (
                <Badge
                  key={tag}
                  variant={isActive ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/90 text-xs"
                  onClick={() => onTagToggle(tag)}
                >
                  #{tag}
                </Badge>
              );
            })}
          </div>
        </div>
      )}

      {/* Active filters */}
      {(activeTags.length > 0 || searchQuery || activeFilter !== 'all') && (
        <div className="space-y-2">
          <div className="text-sm font-medium">Active Filters</div>
          <div className="space-y-1">
            {activeFilter !== 'all' && (
              <Badge variant="secondary" className="gap-1">
                Category: {FILTER_OPTIONS.find(f => f.value === activeFilter)?.label}
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Search: "{searchQuery}"
              </Badge>
            )}
            {activeTags.map(tag => (
              <Badge key={tag} variant="secondary" className="gap-1">
                Tag: #{tag}
              </Badge>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onFilterChange('all');
              onSearchChange('');
              activeTags.forEach(tag => onTagToggle(tag));
            }}
            className="text-xs"
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}