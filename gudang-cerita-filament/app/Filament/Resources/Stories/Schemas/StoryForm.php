<?php

namespace App\Filament\Resources\Stories\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class StoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->columnSpanFull(),
                Textarea::make('story_content')
                    ->required()
                    ->rows(10)
                    ->columnSpanFull(),
        //         Select::make('status')
        //             ->options([
        //     'waiting for review' => 'Waiting for review',
        //     'approved' => 'Approved',
        //     'canceled' => 'Canceled',
        //     'in review' => 'In review',
        //     'rework' => 'Rework',
        // ])
        //             ->default('waiting for review')
        //             ->required(),
        //         TextInput::make('author_id')
        //             ->required()
        //             ->numeric(),
        //         TextInput::make('reviewer_id')
        //             ->numeric(),
        //         Textarea::make('feedback')
        //             ->columnSpanFull(),
            ]);
    }
}
