import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Filament } from '@/types/filament';
import hexRgb from 'hex-rgb';
import React from 'react';

interface ITDViewProps {
  filaments: Filament[];
}

const TDView = ({ filaments }: ITDViewProps) => {
  const formatDecimal = (n: number) => {
    if (typeof n !== 'number') {
      n = parseFloat(n);
    }
    if (isNaN(n)) {
      throw new Error('Invalid number input');
    }
    return n.toFixed(1);
  };

  if (filaments.length === 0) {
    return (
      <p>
        No community reported Transmission Distance for this brand, they may
        already be in HueForge.
      </p>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Color</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Hex</TableHead>
          <TableHead>RGB</TableHead>
          <TableHead>TD</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filaments &&
          filaments.map((filament, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium min-w-[200px] flex justify-start items-center gap-2">
                <div
                  className="w-[25px] h-[25px]"
                  style={{ backgroundColor: filament.color }}
                ></div>
                {filament.name}
              </TableCell>
              <TableCell>
                <Badge variant={'outline'}>{filament.type}</Badge>
              </TableCell>
              <TableCell className="min-w-[150px]">
                {filament.color && (
                  <Badge>{filament.color.toUpperCase()}</Badge>
                )}
              </TableCell>
              <TableCell className="flex justify-between max-w-[250px]">
                {filament.color && (
                  <>
                    <Badge className="bg-red-700 text-white hover:bg-red-500">
                      R: {hexRgb(filament.color).red}
                    </Badge>
                    <Badge className="bg-green-700 text-white hover:bg-green-500">
                      G: {hexRgb(filament.color).green}
                    </Badge>
                    <Badge className="bg-blue-700 text-white hover:bg-blue-500">
                      B: {hexRgb(filament.color).blue}
                    </Badge>
                  </>
                )}
              </TableCell>
              <TableCell>
                {filament.td && (
                  <Badge variant={'secondary'}>
                    {formatDecimal(filament.td)}
                  </Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default TDView;
